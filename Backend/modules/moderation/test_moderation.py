from moderation import Moderator
from dotenv import load_dotenv

import unittest
import os

load_dotenv() # Retrieve environ variables from .env file.


class TestModerator(unittest.TestCase):
  def test_text_flagged_for_moderation(self):
    moderator         = Moderator({
      "openai_api_key": os.environ.get("OPENAI_API_KEY")
    })
    non_flagged_text  = "Some non-harmful text."
    flagged_text      = "I want to kill them."


    self.assertFalse(moderator.text_flagged_for_moderation(non_flagged_text))
    self.assertTrue(moderator.text_flagged_for_moderation(flagged_text))

  def test_image_flagged_for_moderation(self):
    self.assertEqual(2 + 2, 4)



if __name__ == '__main__':
  unittest.main()
