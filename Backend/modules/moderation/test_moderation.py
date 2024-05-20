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
    moderator             = Moderator({
      "content_moderate_api_key": os.environ.get("CONTENT_MODERATE_API_KEY")
    })
    non_flagged_image_url = "https://www.moderatecontent.com/img/sample_faces.jpg'"
    flagged_image_url     = "https://media.gq-magazine.co.uk/photos/635b9d020ddd768a6c91021e/4:3/w_1439,h_1079,c_limit/Call%20of%20Duty%202810%20header.jpg"
    
    
    self.assertFalse(moderator.image_flagged_for_moderation(non_flagged_image_url, 1))
    self.assertTrue(moderator.image_flagged_for_moderation(flagged_image_url, 1))



if __name__ == '__main__':
  unittest.main()
