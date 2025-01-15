
# HealthGuardian AI - A MEDICAL CHATBOT

HealthGuardian AI is a Medical Chatbot which is an AI-driven chatbot designed to assist users in identifying potential medical conditions based on their symptoms. This chatbot leverages natural language processing (NLP) to understand user inputs and provides suggestions or information about possible conditions. It aims to offer accessible health insights for early awareness and support for users before they seek professional medical consultation.

## Features

- Conversational AI interface for symptom-based medical condition suggestions.

- Utilizes NLP to understand user queries and provide relevant responses.
- Aids in early awareness of potential health issues.



## Installation

#### Clone the repository:
```bash
  git clone https://github.com/pranavp00/Medical_Chatbot.git
  cd Medical_Chatbot

```
#### Backend Setup:
Navigate to the backend directory
```bash
  cd backend

```
Install backend dependencies:
```bash
  npm install

```

Activate your Python virtual environment (if not already activated):
```bash
  'For Windows'
   venv\Scripts\activate

  'For macOS/Linux'
   source venv/bin/activate


```
Install `gradio_client` and other dependencies:
```bash
  pip install -r requirements.txt
  pip install gradio_client

```
First create a new file in backend folder and name it as `.env`, Paste the below things in `.env` file and add the values of these on you own.
```bash
  MONGODB_URL=
  JWT_SECRET=
  PORT=5000
  COOKIE_SECRET=

```
#### Frontend Setup:
Navigate to the frontend directory:
```bash
  cd ../frontend

```
Install frontend dependencies:
```bash
  npm install

```

#### Run the Chatbot:
##### Run the Backend:
Navigate to the backend directory and start the development server:
```bash
  cd backend
  npm run dev
```
##### Run the frontend:
In a separate terminal, navigate to the frontend directory and start the frontend development server:
```bash
  cd frontend
  npm run dev

```
##### Acess the Chatbot:
- Once both the backend and frontend servers are running, open your browser and navigate to the provided local development URL (usually http://localhost:5000 or similar) to start interacting with the Medical Chatbot.

## Usage/Examples


- Start the chatbot by running the main script (replace app.py with the actual file if different).
- Input your symptoms or health concerns.
- The chatbot will provide possible medical conditions related to your symptoms.
- For accurate diagnosis, consult a healthcare professional after using the chatbot for preliminary guidance.
## Technology used

**Mern Stack:** MongoDB, Express.js, React.js, and Node.js for the full-stack application development.

**Natural Language Processing(NLP):** For symptom analysis and condition suggestions.

**Python:** For open source LLM

**Microsoft GRIN-MOE:**  Employed for generative AI capabilities in the chatbot.

**Web Scraping:** Used to gather relevant medical data 

## Demo

- SIGN-UP/LOGIN :
  ![PHOTO-2024-09-27-20-47-56](https://github.com/user-attachments/assets/ded06632-0a6a-41f0-816b-36818181033c)
![PHOTO-2024-09-27-20-48-35](https://github.com/user-attachments/assets/5b6dc8dc-f35c-4b88-8dee-f28653843d2e)

- CHATBOT :
  ![PHOTO-2024-09-27-21-00-11](https://github.com/user-attachments/assets/7eea68a4-d826-460a-bc12-536d639478be)


- SEARCH FOR DOCTORS AND BOOKING APPOINTMENT :
  ![PHOTO-2024-09-27-21-01-04](https://github.com/user-attachments/assets/975554b0-e635-4aba-a434-5efece552f46)
![PHOTO-2024-09-27-21-01-18](https://github.com/user-attachments/assets/c3a04409-2109-4f1f-9cc2-76b8196d4d14)
![PHOTO-2024-09-27-21-01-48](https://github.com/user-attachments/assets/8789e39e-ba93-4d52-b479-a70406f12813)
![PHOTO-2024-09-27-21-02-27](https://github.com/user-attachments/assets/71fbe6e6-b215-4f89-b749-3754c08a540b)

  







## Contributing

Contributions are always welcome!
Feel free to contribute to the project:

- Fork the repository.
- Create a new branch `git checkout -b feature-branch`
- Make your changes.
- Submit a pull request.

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Team
### Team Name - Team Ruyuma

### Team Members:
- **Pranav Pillai** - Built the LLM model and optimized model performance
- **Suyash Utekar** - Handled backend development and API integration
- **Aditya Randive** - Worked on frontend design and implementation


## Contact
If you have any questions or suggestions about this project, feel free to contact:

- **Pranav Pillai** - Email: ppillai294@gmail.com
- **Suyash Utekar** - Email: suyashutekar130707@gmail.com
- **Aditya Randive** - Email: adityaran1405@gmail.com

- GitHub: https://github.com/pranavp00
