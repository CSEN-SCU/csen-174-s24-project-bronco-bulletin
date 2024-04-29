from sqlalchemy import URL, create_engine, text, inspect

POST_TABLE = "Posts"

class PGManager():
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
        self.create_table_if_not_exists(POST_TABLE)

    def create_table_if_not_exists(self, table_name):
        inspector = inspect(self.engine)
        if not inspector.has_table(table_name.lower()):
            with self.engine.connect() as conn:
                conn.execute(text(f"CREATE TABLE {table_name} (title TEXT, description TEXT)"))

    def insert_card(self, title, description):
         with self.engine.connect() as conn:
            conn.execute(
                text(f"INSERT INTO {POST_TABLE} (title, description) VALUES (:title, :description)"),
                [{"title": title, "description": description}],
            )
            conn.commit()

    def get_cards(self):
        pass
    

    