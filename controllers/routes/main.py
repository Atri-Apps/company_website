from .atri import Atri
from fastapi import Request, Response
from atri_utils import *
import gspread
from oauth2client.service_account import ServiceAccountCredentials

def add_data_to_gsheet(email: str):
    scope = ['https://www.googleapis.com/auth/spreadsheets',
             'https://www.googleapis.com/auth/drive']
    credentials = ServiceAccountCredentials.from_json_keyfile_dict({
                                                                  "type": "service_account",
                                                                  "project_id": "tutorial-python-367718",
                                                                  "private_key_id": "619cf9b407d6fb5e3ad29c089e5e7ec3c985a5f1",
                                                                  "private_key": os.environ.get('PRIVATE_KEY').replace(r'\n', '\n'),
                                                                  "client_email": os.environ.get('CLIENT_EMAIL'),
                                                                  "client_id": "112684379099394488040",
                                                                  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                                                                  "token_uri": "https://oauth2.googleapis.com/token",
                                                                  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                                                                  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/sanskargupta%40tutorial-python-367718.iam.gserviceaccount.com"
                                                                }
, scope)

    client = gspread.authorize(credentials)

    # sheet = client.create("FirstSheet")
    # sheet.share('sanskarg348@gmail.com', perm_type='user', role='writer')

    sheet = client.open('FirstSheet').sheet1
    sheet.append_rows([[email]])

def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """


def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """

    if at.Button16.onClick:
        if at.Input4.custom.value != '':
            add_data_to_gsheet(at.Input4.custom.value)
