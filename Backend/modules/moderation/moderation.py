from openai import OpenAI

import requests

class Moderator:
  """Class for flagging if text or images should be moderated."""

  text_moderation_api_url  = "https://api.openai.com/v1/moderations"      # OpenAI Text Moderation.
  image_moderation_api_url = "https://api.moderatecontent.com/moderate/"  # ModerateContent Image Moderation.

  def __init__(self, configs):
    """Configures moderation libraries.
    
    Keyword Arguments:
    configs -- Configs for moderation libraries.
    """
    self.openai_client = OpenAI(
      api_key=configs["openai_api_key"]
    )
    self.moderate_content_api_key = configs["moderate_content_api_key"]

  def text_flagged_for_moderation(self, text):
    """Returns if a string should be flagged for moderation.
    
    Keyword Arguments:
    text -- Input string to classify.
    """
    response = self.openai_client.moderations.create(input=text)
    text_is_flagged = response.results[0].flagged
    return text_is_flagged

  def image_flagged_for_moderation(self, image_url, rating_index):
    """Returns if an image should be flagged for moderation.
    
    Keyword Arguments:
    image_url -- URL of image to classify.
    rating_index -- Numerical value of rating index to flag. (1 - Everyone, 2 - Teen, 3 - Adult)
    """
    query = {
      "url": image_url,
      "key": self.moderate_content_api_key
    }
    response = requests.request.get("GET", image_moderation_api_url, data="", headers={}, params=query)
    image_is_flagged = response.text.rating_index > rating_index
    return image_is_flagged
