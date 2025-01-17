import sys
import io
from gradio_client import Client
# Receive arguments from Node.js
arg_from_node = sys.argv[1]

def medical(text):
    old_stdout = sys.stdout
    new_stdout = io.StringIO()
    sys.stdout = new_stdout
    client = Client("ruslanmv/Medical-Llama3-v2")
    sys.stdout = old_stdout
    result = client.predict(
        message=text,
        system_message="You are a Medical AI Assistant. Please be thorough and provide an informative and precise answer and at last also provide the specialist for the disease.. If you don't know the answer to a specific medical inquiry, advise seeking professional help.",
        max_tokens=512,
        temperature=0.8,
        top_p=0.9,
        api_name="/chat"
    )
    print(result)
    return result

text = arg_from_node
r = medical(text)