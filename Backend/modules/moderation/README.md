# Moderation
Module to determine if text or images should be flagged for moderation.

## Getting Started
Instructions for getting started using the moderation module are below.

### Prerequisites
Before using the moderation module, the following steps will need to be taken:

* Add an [OpenAI api key](https://platform.openai.com/api-keys) to the `.env` file for the `OPENAI_API_KEY` attribute. A paid tier membership is required to use the moderation service.

### Initial Configuration
The following configurations must be specified in the `.env` file.

##### OPENAI_API_KEY
Type: `string`
Default: None

## Testing
To test the module, run the `python3 -m unittest` command within the moderation directory.

```
python3 -m unittest
```

This will run the tests in the directory following the specified format:

* `test_**.py`

## Features
* Users can moderate text through OpenAI moderation.

## Built With
* [OpenAI](https://openai.com) - OpenAI is an AI research and deployment company.

## Authors
[Eric Hicks](https://github.com/hicks8989)
