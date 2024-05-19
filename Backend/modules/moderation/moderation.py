from openai import OpenAI

import os

class Moderator:
  """Class for flagging if text or images should be moderated."""

  text_moderation_api_url  = "https://api.openai.com/v1/moderations" # OpenAI text Moderation.
  image_moderation_api_url = ""

  def __init__(self, configs):
    """Configures moderation libraries.
    
    Keyword Arguments:
    configs -- Configs for moderation libraries.
    """
    self.openai_client = OpenAI(
      api_key=configs["openai_api_key"]
    )

  def text_flagged_for_moderation(self, text):
    """Returns if a string should be flagged for moderation.
    
    Keyword Arguments:
    text -- Input string to classify.
    """
    response = self.openai_client.moderations.create(input=text)
    text_is_flagged = response.results[0].flagged
    return text_is_flagged

  def image_flagged_for_moderation(self, image_url):
    """Returns if an image should be flagged for moderation.
    
    Keyword Arguments:
    image_url -- URL of image to classify.
    """
    return True
