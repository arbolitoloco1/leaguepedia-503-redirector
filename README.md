# leaguepedia-503-redirector
This addon intercepts HTTP responses when submiting an edit on https://lol.fandom.com, checks if the status code is 503, and if it is removes "?action=submit" in the URL to avoid the error message.
