from .atri import Atri
from fastapi import Request, Response
from atri_utils import *
import json
import urllib


def get_filtered_data(filter_btn, start_indx=None):
    f = open('showcase.json')
    data = json.load(f)
    if filter_btn != '':
        arr_2 = []
        for i in data:
            if filter_btn in set(i['tags']):
                arr_2.append(i)
        data = arr_2
    if start_indx is None:
        return data
    else:
        return data[start_indx:min(start_indx + 6, len(data))]


def set_overlay_components_data(at: Atri):
    if at.Input19.onChange:
        at.TextBox497.custom.text = at.Input19.custom.value
    if at.Input20.onChange:
        at.TextBox498.custom.text = at.Input20.custom.value
    if at.Input21.onChange:
        at.TextBox496.custom.text = at.Input21.custom.value
    if at.Input24.onChange:
        j = 1
        for i in at.Input24.custom.value.split(','):
            # Flex
            if j > 3:
                break
            instance: at.Tag_Flex_1.__class__ = getattr(at, f'Tag_Flex_{j}')
            instance.styles.display = 'flex'

            # Button
            instance: at.Tag_1.__class__ = getattr(at, f'Tag_{j}')
            instance.custom.text = i
            j += 1
        for i in range(j,4):
            instance: at.Tag_Flex_1.__class__ = getattr(at, f'Tag_Flex_{j}')
            instance.styles.display = 'none'
    if at.Upload3.onChange:
        if at.Upload3.io.files != None:
            file = at.Upload3.io.files[0]
            bytes_data = file.file.read()
            at.Image318.custom.src = create_media_response(bytes_data, mime_type=file.content_type)
    if at.Upload4.onChange:
        if at.Upload4.io.files != None:
            file = at.Upload4.io.files[0]
            at.Image317.custom.src = create_media_response(file.file.read(), mime_type=file.content_type)
    if at.Button235.onClick:
        if at.Input19.custom.value != '' and at.Input20.custom.value != '' and at.Input21.custom.value != '':
            add_data_to_json(at)
        reset_overlay_component(at)


def set_tags_data(at: Atri, data, start_indx, card_numer):
    arr = ['a', 'b', 'c']
    for k in range(1, 4):
        instance: at.Card_Tag_1_a.__class__ = getattr(at, f'Card_Tag_{card_numer + 1}_{arr[k - 1]}')
        instance.styles.display = 'none'
    for k in range(1, len(data[card_numer + start_indx]['tags']) + 1):
        # Text
        instance: at.Card_Tag_1_a_Text.__class__ = getattr(at, f'Card_Tag_{card_numer + 1}_{arr[k - 1]}_Text')
        instance.custom.text = data[card_numer + start_indx]['tags'][k - 1]

        # Flex
        instance: at.Card_Tag_1_a.__class__ = getattr(at, f'Card_Tag_{card_numer + 1}_{arr[k - 1]}')
        instance.styles.display = 'flex'


def add_data_to_json(at: Atri):
    f = open('showcase.json')
    data = json.load(f)

    data.append({
        "id": data[-1]['id'] + 1,
        "creator_name": at.Input21.custom.value,
        "creator_image": "_".join((at.Input19.custom.value.lower() + at.Input21.custom.value.lower()).split()),
        "title": at.Input19.custom.value,
        "image": "_".join(at.Input19.custom.value.lower().split()),
        "detail": at.Input20.custom.value,
        "github_url": at.Input22.custom.value,
        "published_url": at.Input23.custom.value,
        "tags": at.Input24.custom.value.split(',')
    })
    with open("showcase.json", "w") as outfile:
        json.dump(data, outfile)
    #TODO :- Save image uploaded by user

def set_card_navigations(at: Atri, res, data_fn=[]):
    if not data_fn:
        f = open('showcase.json')
        data_fn = json.load(f)
    j = 1
    for i in data_fn:
        if j <= 6:
            instance: at.Card_Github_1.__class__ = getattr(at, f'Card_Github_{j}')
            if instance.onClick:
                res.headers.append("location", i['github_url'])
            j += 1
    j = 1
    for i in data_fn:
        if j <= 6:
            instance: at.Card_Deploy_1.__class__ = getattr(at, f'Card_Deploy_{j}')
            if instance.onClick:
                res.headers.append("location", i['published_url'])
            j += 1


def reset_overlay_component(at: Atri):
    at.Input19.custom.value = ''
    at.Input20.custom.value = ''
    at.Input21.custom.value = ''
    at.Input22.custom.value = ''
    at.Input23.custom.value = ''
    at.Input24.custom.value = ''
    at.Image318.custom.src = '/app-assets/Screen%20Shot%202022-11-06%20at%202.45%201.png'
    at.Image317.custom.src = '/app-assets/' + 'user.jpeg'
    at.TextBox497.custom.text = 'Title of the website'
    at.TextBox498.custom.text = 'Personal blog with minimalist design. It includes four pages - landing page, blog, talks and about page.'
    at.TextBox496.custom.text = 'Creator Name'
    for i in range(1, 4):
        instance: at.Tag_1.__class__ = getattr(at, f'Tag_{i}')
        instance.custom.text = ''
    at.Overlay3.styles.display = 'none'


def display_cards_data(at: Atri, start_indx, filter_btn: str = ''):
    data = get_filtered_data(filter_btn)
    at.TextBox453.custom.text = f'Contribution {start_indx+1}-{min(start_indx + 6, len(data))}'
    at.TextBox364.custom.text = f'{len(data)} results'
    for i, j in enumerate(data[start_indx:min(start_indx + 6, len(data))]):
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
        set_tags_data(at,data, start_indx, i)
    left = 6 - (min(start_indx + 6, len(data)) - start_indx)
    for i in range(left):
        instance: at.Card_1.__class__ = getattr(at, f'Card_{6 - i}')
        instance.styles.display = 'none'
    at.TextBox474.custom.text = f'{start_indx//6 + 1} of {len(data)//6 if len(data)%6 == 0 else len(data)//6 + 1}'

    return data


def display_available_filters(at: Atri):
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


def set_filters_navigation(at: Atri, res):
    for i in range(1,10):
        instance: at.Filter_Btn_1.__class__ = getattr(at, f'Filter_Btn_{i}')
        if instance.onClick:
            url = "/Showcase" + "?" + urllib.parse.urlencode({"filter": instance.custom.text})
            res.headers.append("location", url)


def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """
    at.Overlay3.styles.display = 'none'
    display_available_filters(at)
    display_cards_data(at, 0)
    pass


def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    if len(query.split('=')) > 1:
        display_cards_data(at, 0, query.split('=')[1])
    pass


def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    if at.Image303.onClick:
        dt1, dt2 = map(int, at.TextBox453.custom.text.split()[1].split('-'))
        if dt1 == 1:
            pass
        else:
            if len(str(req.scope['headers'][13][1]).split('=')) >= 2:
                current_displayed_data = display_cards_data(at, dt1 - 6 - 1, str(req.scope['headers'][13][1]).split('=')[1][:-1])
                set_card_navigations(at, res, current_displayed_data)
            else:
                current_displayed_data = display_cards_data(at, dt1 - 6 - 1)
                set_card_navigations(at, res, current_displayed_data)
            at.TextBox453.custom.text = f'Contribution {dt1 - 6}-{dt1 - 1}'
    if at.Image304.onClick:
        f = open('showcase.json')
        data = json.load(f)
        dt1, dt2 = map(int, at.TextBox453.custom.text.split()[1].split('-'))
        if dt2 >= len(data) or dt2 < 6:
            pass
        else:
            if len(str(req.scope['headers'][13][1]).split('=')) >= 2:
                current_displayed_data = display_cards_data(at, dt2 + 1 - 1, str(req.scope['headers'][13][1]).split('=')[1][:-1])
                set_card_navigations(at, res, current_displayed_data)
            else:
                current_displayed_data = display_cards_data(at, dt2 + 1 - 1)
                set_card_navigations(at, res, current_displayed_data)
            at.TextBox453.custom.text = f'Contribution {dt2 + 1}-{min(dt2 + 1 + 6, len(data))}'

    if at.Image319.onClick:
        at.Overlay3.styles.display = 'none'
    if at.Button116.onClick:
        at.Overlay3.styles.display = 'flex'
    if len(str(req.scope['headers'][13][1]).split('=')) >= 2:
        current_data = get_filtered_data(str(req.scope['headers'][13][1]).split('=')[1][:-1], (int(at.TextBox474.custom.text.split()[0])-1)*6)
        set_card_navigations(at, res, current_data)
    set_overlay_components_data(at)
    set_card_navigations(at, res)
    set_filters_navigation(at, res)

