from .atri import Atri
from fastapi import Request, Response
from atri_utils import *
import json
import urllib


def set_redirect(at: Atri, res):
    f = open('showcase.json')
    data = json.load(f)

    for i in range(1, 7):
        instance: at.Card_Github_1.__class__ = getattr(at, f'Card_Github_{i}')
        if instance.onClick:
            res.headers.append("location", data[i-1]['github_url'])
    for i in range(1, 7):
        instance: at.Card_Deploy_1.__class__ = getattr(at, f'Card_Deploy_{i}')
        if instance.onClick:
            res.headers.append("location", data[i-1]['published_url'])


def set_data(at: Atri, start_indx, max_len, filter_btn: str = ''):
    f = open('showcase.json')
    data = json.load(f)
    if filter_btn != '':
        arr_2 = []
        for i in data:

            if filter_btn in set(i['tags']):
                arr_2.append(i)
        data = arr_2
    at.TextBox453.custom.text = f'Contribution {start_indx+1}-{min(start_indx + max_len, len(data))}'
    at.TextBox364.custom.text = f'{len(data)} results'
    arr = ['a', 'b', 'c']
    for i, j in enumerate(data[start_indx:min(start_indx + max_len, len(data))]):
        # Card
        instance: at.Card_1.__class__ = getattr(at, f'Card_{i+1}')
        instance.styles.display = 'flex'
        # Image
        instance: at.Card_Image_1.__class__ = getattr(at, f'Card_Image_{i+1}')
        instance.custom.src = f'/app-assets/{data[i+start_indx]["image"]}'

        # Title
        instance: at.Card_Title_1.__class__ = getattr(at, f'Card_Title_{i+1}')
        instance.custom.text = data[i + start_indx]['title']

        # Detail
        instance: at.Card_Text_1.__class__ = getattr(at, f'Card_Text_{i+1}')
        instance.custom.text = data[i+start_indx]['detail']

        # Creator_Image
        instance: at.Card_Creator_Image_1.__class__ = getattr(at, f'Card_Creator_Image_{i+1}')
        instance.custom.src = f'/app-assets/{data[i+start_indx]["creator_image"]}'

        # Creator_Name
        instance: at.Card_Creator_Name_1.__class__ = getattr(at, f'Card_Creator_Name_{i+1}')
        instance.custom.text = data[i+start_indx]['creator_name']

        # Tags
        for k in range(1,4):
            instance: at.Card_Tag_1_a.__class__ = getattr(at, f'Card_Tag_{i+1}_{arr[k-1]}')
            instance.styles.display = 'none'
        for k in range(1,len(data[i+start_indx]['tags']) + 1):
            # Text
            instance: at.Card_Tag_1_a_Text.__class__ = getattr(at, f'Card_Tag_{i+1}_{arr[k-1]}_Text')
            instance.custom.text = data[i+start_indx]['tags'][k-1]

            # Flex
            instance: at.Card_Tag_1_a.__class__ = getattr(at, f'Card_Tag_{i + 1}_{arr[k - 1]}')
            instance.styles.display = 'flex'
    left = max_len - (min(start_indx + max_len, len(data)) - start_indx)
    for i in range(left):
        instance: at.Card_1.__class__ = getattr(at, f'Card_{max_len - i}')
        instance.styles.display = 'none'


def show_filters(at: Atri):
    f = open('showcase.json')
    data = json.load(f)
    arr = []
    for i in data:
        arr += i['tags']
    arr = list(set(arr))
    for i in range(1, 10):
        instance: at.Filter1.__class__ = getattr(at, f'Filter{i}')
        if i <= len(arr):
            instance.styles.display = 'flex'
            instance_btn: at.Filter_Btn_1.__class__ = getattr(at, f'Filter_Btn_{i}')
            instance_btn.custom.text = arr[i - 1]
        else:
            instance.styles.display = 'none'


def set_filter(at: Atri, res):
    for i in range(1,10):
        instance: at.Filter_Btn_1.__class__ = getattr(at, f'Filter_Btn_{i}')
        if instance.onClick:
            url = "/Showcase" + "?" + urllib.parse.urlencode({"filter": instance.custom.text})
            res.headers.append("location", url)
            set_data(at, 0, 6, instance.custom.text)


def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """
    pass


def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    show_filters(at)
    if len(query.split('=')) > 1:
        set_data(at, 0, 6, query.split('=')[1])
    else:
        set_data(at, 0, 6)

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    if at.Down.onClick:
        dt1, dt2 = map(int, at.TextBox453.custom.text.split()[1].split('-'))
        if dt1 == 1:
            pass
        else:
            set_data(at, dt1 - 6 - 1, 6)
            at.TextBox453.custom.text = f'Contribution {dt1 - 6}-{dt1 - 1}'
    if at.Up.onClick:
        f = open('showcase.json')
        data = json.load(f)
        dt1, dt2 = map(int, at.TextBox453.custom.text.split()[1].split('-'))
        if dt2 >= len(data):
            pass
        else:
            set_data(at, dt2 + 1 - 1, 6)
            at.TextBox453.custom.text = f'Contribution {dt2 + 1}-{min(dt2 + 1 + 6, len(data))}'

    set_redirect(at, res)
    set_filter(at, res)
