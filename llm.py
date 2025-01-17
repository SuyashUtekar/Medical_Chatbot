import sys
import io
from gradio_client import Client
# Receive arguments from Node.js
arg_from_node = sys.argv[1]

def medical(text):
    old_stdout = sys.stdout
    new_stdout = io.StringIO()
    sys.stdout = new_stdout
    client = Client("sujal011/llama3.2-3b-symptoms-to-disease-bot")
    sys.stdout = old_stdout
    result = client.predict(
		message= f"""
        You are a Medical AI Assistant. Based on the user's symptoms, provide a precise and informative response that includes:
        A precise explanation of the likely disease
        Conclude with 'Disease: [Disease Name]'
        
        If you don't know the answer to a specific medical inquiry, advise seeking professional help.
        diagnosis the following input - {text}""",
		
		api_name="/chat"
    )
    print(result)
    return result

text = arg_from_node
r = medical(text)