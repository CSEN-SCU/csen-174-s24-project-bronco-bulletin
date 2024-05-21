# test_dbHandler.py
import unittest
from unittest.mock import MagicMock, patch
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from dbHandler import PGManager
from post import Base, Post, Tag

class TestPGManager(unittest.TestCase):
    
    def setUp(self):
        # Use an in-memory SQLite database for testing
        self.engine = create_engine('sqlite:///:memory:')
        Base.metadata.create_all(self.engine)
        self.Session = sessionmaker(bind=self.engine)
        
        self.manager = PGManager("user", "pass", engine=self.engine)
    
    def tearDown(self):
        Base.metadata.drop_all(self.engine)
    
    def test_insert_tag(self):
        tag_name = "Test Tag"
        tag = self.manager.insert_tag(tag_name)
        
        session = self.Session()
        retrieved_tag = session.query(Tag).filter_by(name=tag_name).first()
        session.close()
        
        self.assertIsNotNone(retrieved_tag)
        self.assertEqual(tag.tag_id, retrieved_tag.tag_id)
        self.assertEqual(tag.name, retrieved_tag.name)
    
    def test_insert_post_with_existing_tags(self):
        # Insert tags first
        tag_names = ["Tag1", "Tag2"]
        for tag_name in tag_names:
            self.manager.insert_tag(tag_name)
        
        # Insert a post with those tags
        author = "Author"
        title = "Title"
        description = "Description"
        post = self.manager.insert_post(author, title, description, tag_names)
        
        session = self.Session()
        retrieved_post = session.query(Post).filter_by(post_id=post.post_id).first()
        session.close()
        
        self.assertIsNotNone(retrieved_post)
        self.assertEqual(post.post_id, retrieved_post.post_id)
        self.assertEqual(len(retrieved_post.tags), len(tag_names))
    
    def test_get_posts(self):
        # Insert a post to test retrieval
        author = "Author"
        title = "Title"
        description = "Description"
        self.manager.insert_post(author, title, description)
        
        posts = self.manager.get_posts()
        
        self.assertEqual(len(posts), 1)
        self.assertEqual(posts[0].author, author)
        self.assertEqual(posts[0].title, title)
        self.assertEqual(posts[0].description, description)
        
if __name__ == '__main__':
    unittest.main()
