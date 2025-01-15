import { Request, Response } from "express";
import puppeteer from "puppeteer";

// Doctor interface to define the structure of the doctor object
interface Doctor {
  name: string;
  specialization: string;
  experience: string;
  hospital: string;
  location: string;
  profileLink: string;
}

// Function to scrape doctors from Practo based on disease and location
export const scrapeDoctors = async (
  req: Request,
  res: Response
) => {
  const { disease, location }: { disease: string; location: string } = req.body;
  const browser = await puppeteer.launch({ headless: false });
  const doctors: Doctor[] = [];

  try {
      // Construct the search URL
      const searchUrl = `https://www.practo.com/search/doctors?results_type=doctor&q=%5B%7B%22word%22%3A%22${disease}%22%2C%22autocompleted%22%3Atrue%2C%22category%22%3A%22symptom%22%7D%5D&city=${location}`;
      const page = await browser.newPage();
      await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

      // Extracting doctor names, specializations, experiences, hospitals, locations, and profile links
      const names = await page.$$('div > div > div > div:nth-child(4) > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(2) > a > div');
      const specializations = await page.$$('#container > div > div.c-listing-wrapper > div > div.pure-u-17-24.c-listing__left > div > div > div:nth-child(1) > div > div:nth-child(1) > div.info-section > div.u-grey_3-text > div.u-d-flex');
      const experiences = await page.$$('#container > div > div.c-listing-wrapper > div > div.pure-u-17-24.c-listing__left > div > div > div:nth-child(1) > div > div:nth-child(1) > div.info-section > div.u-grey_3-text > div.uv2-spacer--xs-top');
      const hospitals = await page.$$('#container > div > div.c-listing-wrapper > div > div.pure-u-17-24.c-listing__left > div > div > div:nth-child(1) > div > div:nth-child(1) > div.info-section > div.uv2-spacer--sm-top > div:nth-child(3)');
      const locs = await page.$$('#container > div > div.c-listing-wrapper > div > div.pure-u-17-24.c-listing__left > div > div > div:nth-child(1) > div > div:nth-child(1) > div.info-section > div.uv2-spacer--sm-top > div.u-bold.u-d-inlineblock.u-valign--middle');
      const links = await page.$$('div > div > div > div:nth-child(4) > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(2) > a');
      const baseUrl = 'https://www.practo.com';

      // Loop through and extract data
      for (let i = 0; i < names.length; i++) {
        let name = await page.evaluate(el => el.innerText, names[i]) as string;
        let specialization = await page.evaluate(el => el.innerText, specializations[i]) as string;
        let experience = await page.evaluate(el => el.innerText, experiences[i]) as string;
        let hospital = await page.evaluate(el => el.innerText, hospitals[i]) as string;
        let location = await page.evaluate(el => el.innerText, locs[i]) as string;
        const relativeLink = await page.evaluate(el => el.getAttribute("href"), links[i]);
        const profileLink = baseUrl + relativeLink;

        doctors.push({
          name: name,
          specialization: specialization,
          experience: experience,
          hospital: hospital,
          location: location,
          profileLink: profileLink,
        });
      }
      
      // Respond with the scraped doctors
      return res.status(200).json({ message: "OK", doctors });
    } catch (error) {
      console.error("Error during scraping:", error);
      return res.status(500).json({ message: "Failed to scrape doctors", cause: error.message });
    } finally {
      await browser.close();
    }
};