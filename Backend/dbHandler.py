from sqlalchemy import create_engine, URL
from sqlalchemy.orm import sessionmaker
from datetime import datetime
import uuid
import pytz
from post import Base, Post, Tag, post_tag_association

class PGManager:
    def __init__(self, username, password):
        self.connection_string = URL.create(
            "postgresql",
            username=username,
            password=password,
            host="ep-weathered-heart-a6arf5nb.us-west-2.aws.neon.tech",
            database="csen174",
            query={"sslmode": "require"}
        )
        self.engine = create_engine(self.connection_string)
        Base.metadata.create_all(self.engine)  # Ensure tables are created
        
        # Create a session factory to manage sessions
        self.Session = sessionmaker(bind=self.engine)

    def insert_tag(self, tag_name):
        # Create a new session
        session = self.Session()
        try:
            tag = session.query(Tag).filter_by(name=tag_name).first()
            if not tag:
                new_tag = Tag(tag_id=uuid.uuid4().hex, name=tag_name)
                session.add(new_tag)
                session.commit()
        finally:
            # Always close the session
            session.close()

    def insert_post(self, author, title, description, tag_names=[]):
        post_id = uuid.uuid4().hex
        current_time = datetime.now(pytz.timezone('America/Los_Angeles'))
        post = Post(
            post_id=post_id,
            author=author,
            title=title,
            description=description,
            current_time=current_time,
        )

        # Create a new session
        session = self.Session()
        try:
            tag_objects = []
            for tag_name in tag_names:
                tag = session.query(Tag).filter_by(name=tag_name).first()
                if tag is None:
                    raise ValueError(f"Unknown tag name {tag_name}")
                tag_objects.append(tag)

            post.tags.extend(tag_objects)  # Assign the tags
            session.add(post)
            session.commit()
        finally:
            # Always close the session
            session.close()

    def get_posts(self):
        # Create a new session
        session = self.Session()
        try:
            posts = session.query(Post).all()
            return posts
        finally:
            # Always close the session
            session.close()
