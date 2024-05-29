from sqlalchemy import Column, String, Table, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

post_tag_association = Table(
    'post_tag',
    Base.metadata,
    Column('post_id', String, ForeignKey('Posts.post_id')),
    Column('tag_id', String, ForeignKey('Tags.tag_id'))
)

class Post(Base):
    __tablename__ = "Posts"

    post_id = Column(String, primary_key=True)
    author = Column(String)
    title = Column(String)
    description = Column(String)
    current_time = Column(DateTime)

    tags = relationship(
        'Tag',
        secondary=post_tag_association,
        backref='posts',
        lazy='joined'
    )

    def __repr__(self):
        return f"Post(post_id='{self.post_id}', author='{self.author}', title='{self.title}', description='{self.description}', current_time='{self.current_time}')"

class Tag(Base):
    __tablename__ = "Tags"

    tag_id = Column(String, primary_key=True)
    name = Column(String)

    def __repr__(self):
        return f"Tag(tag_id='{self.tag_id}', name='{self.name}')"
