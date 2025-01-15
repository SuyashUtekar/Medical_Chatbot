import sys
import io
from gradio_client import Client
# Receive arguments from Node.js
arg_from_node = sys.argv[1]

def medical(text):
    old_stdout = sys.stdout
    new_stdout = io.StringIO()
    sys.stdout = new_stdout
    client = Client("GRIN-MoE-Demo/GRIN-MoE")
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






























# import sys
# import os
# from gradio_client import Client
# import re 
# import io

# # Receive arguments from Node.js
# arg_from_node = sys.argv[1]
# # print("", arg_from_node)


# def medical(text):
#     old_stdout = sys.stdout
#     new_stdout = io.StringIO()
#     sys.stdout = new_stdout
#     client = Client("peteparker456/medical_diagnosis_llama2")
#     sys.stdout = old_stdout
#     result = client.predict(
# 		message=text,
# 		system_message="""
#         You are a Medical AI Assistant. Based on the user's symptoms, provide a short, precise response that includes:
#         1. The symptoms
#         2. A brief explanation of the likely disease
#         3. Conclude with 'Disease: [Disease Name]'
        
#         If you don't know the answer to a specific medical inquiry, advise seeking professional help.
#         """,
# 		max_tokens=512,
# 		temperature=0.7,
# 		top_p=0.95,
# 		api_name="/chat"
#     )
#     return result

# def extract_disease(r):
#     # Extract the disease name using regex
#     match = re.search(r'Disease:\s*([^\.\n]+)', r)
#     if match:
#         return match.group(1).strip()
#     return "Unknown"

# text = arg_from_node
# r = medical(text)
# print(r)


# # Assuming the result is a string directly containing the response text
# # response_text = r if isinstance(r, str) else r['data']['response']
# # disease = extract_disease(response_text)
