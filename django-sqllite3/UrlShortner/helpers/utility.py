import json
class HelperClass():
    def isValidURLPattern(url):
        '''
        Check if a URL is valid or not via Regular Expression
        
        @param url (string): URL to check the validity

        @return Bool

        (url) -> string
        >>>isValidURLPattern('https://www.google.com')
        True
        >>>isValidURLPattern('https://google')
        False
        '''
        import re
        regex = re.compile(
            r'^(?:http|ftp)s?://' # http:// or https://
            r'(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+(?:[A-Z]{2,6}\.?|[A-Z0-9-]{2,}\.?)|' #domain...
            r'localhost|' #localhost...
            r'\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})' # ...or ip
            r'(?::\d+)?' # optional port
            r'(?:/?|[/?]\S+)$', re.IGNORECASE)
        
        return re.match(regex, "http://www.example.com") is not None

    def getRandomString(length=7):
        '''
        Returns a random string as per the length provided
        
        @param length (int): Length of the Randomly Generated String

        @return String

        (int) -> string
        >>>getRandomString(4)
        Dk8W
        '''
        import random, string

        allowed_characters = string.ascii_letters + string.digits
        return ''.join(random.sample(allowed_characters, length))
    
    def get(req, key, default=""):
        '''
        Returns the key value sent in request 
        
        :param req (request)- The Request object

        :param key (string) - The Key that needs to be fetched from Reques

        :param default (string)- The default string that needs to be fetched if key is absent in reqest

        :return String

        (int) -> string
        >>>get(req, "token_exist")
        Dk8WsadasonINODNEWNDPIWEpmdmdmpwWD
        
        >>>get(req, "token_not_exist")
        ""

        >>>get(req, "token_not_exist", "DEFAULT_TOKEN")
        DEFAULT_TOKEN
        '''
        if req.method == 'GET':
            return req.GET[key] if key in req.GET else default
        elif req.method == 'POST':
            return req.POST.get(key, '')

        return ""
    
    getRandomString     = staticmethod(getRandomString)
    get                 = staticmethod(get)
    isValidURLPattern   = staticmethod(isValidURLPattern)