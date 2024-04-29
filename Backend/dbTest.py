from os import getenv
from dotenv import load_dotenv
from dbHandler import PGManager

load_dotenv()  # Load environment variables from .env file

# Sample data
posts = [
    {
        "title": "ACM Competitive Programming",
        "description": "Join now!",
        "author": "ACM Board",
        "image": "link"
    },
]

manager = PGManager("csen174_owner", getenv("PGPASSWORD"))

for post in posts:
    manager.insert_card(post["title"], post["description"])
    
print("Done")
