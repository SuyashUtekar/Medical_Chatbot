import secrets

# Generate a 32-byte secure random secret for cookie
cookie_secret = secrets.token_hex(32)
print(cookie_secret)
