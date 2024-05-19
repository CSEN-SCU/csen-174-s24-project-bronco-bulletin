from os import getenv
from dotenv import load_dotenv
from dbHandler import PGManager

load_dotenv()  # Load environment variables from .env file

# Sample data
tags = [
    "Events",
    "Clubs",
    "Activities",
    "Tutoring"
]

posts = [
    {
        "title": "ACM Competitive Programming",
        "description": "Join ACM Competitive Programming and ACM-G for our first ever on-campus coding competition on Friday, March 1st!",
        "author": "SCU ACM",
        "tags": ["Events", "Clubs"],
        "image": "link"
    },
    {
        "title": "SCU Real Estate Association",
        "description": "The Santa Clara University Real Estate Association was established in 2016 and serves as the premier Real Estate...",
        "author": "SCU Real Estate Association",
        "tags": ["Clubs"],
        "image": "link"
    },
    {
        "title": "Black Law Student Association",
        "description": "Our organization works with SCU law administration to encourage/include cultural competency within the curriculum...",
        "author": "Black Law Student Association",
        "tags": ["Clubs"],
        "image": "link"
    },
    {
        "title": "Tau Beta Pi",
        "description": "Beta Pi California Zeta is Santa Clara University's Chapter of the nationally renowned Engineering Honor Society Tau Beta Pi.",
        "author": "TBP",
        "tags": ["Clubs"],
        "image": "link"
    },
    {
        "title": "Women in STEM",
        "description": "Our goal is to cultivate an uplifting community where female undergraduate students majoring in STEM fields can...",
        "author": "SCU Women in STEM",
        "tags": ["Clubs"],
        "image": "link"
    }
]

manager = PGManager("csen174_owner", getenv("PGPASSWORD"))

for tag in tags:
    manager.insert_tag(tag)

for post in posts:
    manager.insert_post(post["author"], post["title"], post["description"], post["tags"])
    
print("Done")
