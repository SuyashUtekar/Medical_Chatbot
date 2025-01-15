import sys
import io
from gradio_client import Client
# Receive arguments from Node.js
arg_from_node = sys.argv[1]

def medical(text):
    old_stdout = sys.stdout
    new_stdout = io.StringIO()
    sys.stdout = new_stdout
    client = Client("microsoft/GRIN-MoE")
    sys.stdout = old_stdout
    result = client.predict(
		message= f"""Act as Medical AI Assistant. Please be thorough and provide an informative answer. 
     If you don't know the answer to a specific medical inquiry, advise seeking professional help. diagnosis the following input - {text}""",
		
		api_name="/chat"
    )
    print(result)
    return result

text = arg_from_node
r = medical(text)






















