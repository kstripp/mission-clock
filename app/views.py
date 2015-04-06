#!/usr/bin/env python

from app import app
import flask

class Mission(object):

    def __init__(self, **kwargs):
        label = kwargs['label']
        launch_date = kwargs['launch_date']
        url = kwargs['url']
        next_event = None

missions = []

missions.append({'label':'UTC',         'launch_date':'1970-01-01T00:00:00Z', 'url':'/utc'})
missions.append({'label':'M-Cubed',     'launch_date':'2011-10-28T19:48:01Z', 'url':'/m-cubed'})
missions.append({'label':'MCubed-2',    'launch_date':'2013-12-06T06:30:00Z', 'url':'/mcubed-2'})
missions.append({'label':'RAX',         'launch_date':'2010-11-20T01:25:00Z', 'url':'/rax'})
missions.append({'label':'RAX-2',       'launch_date':'2011-10-28T19:48:01Z', 'url':'/rax-2'})
missions.append({'label':'E1P',         'launch_date':'2011-03-04T10:09:43Z', 'url':'/e1p'})
missions.append({'label':'E1P-FU2',     'launch_date':'2011-10-28T19:48:01Z', 'url':'/e1p-fu2'})
missions.append({'label':'GRIFEX',      'launch_date':'2015-01-31T14:22:42Z', 'url':'/grifex'})
missions.append({'label':'FIREBIRD II', 'launch_date':'2015-01-31T14:22:42Z', 'url':'/firebirdii'})

urls = []
for i in missions:
    urls.append(i['url'])

@app.route('/')
@app.route('/index')
@app.route('/utc')
def index():
    return flask.render_template('index.html', title="Mission Clock", missions=missions, clock_label=missions[0]['label'],mission=missions[0])

@app.route('/<mission_name>')
def show_clocks(mission_name):
    try:
        idx = urls.index('/' + mission_name)
    except ValueError:
        return "You are having a bad problem and you will not go to space today (404)" , 200, {'Content-Type': 'text/html; charset=utf-8'}
    return flask.render_template('index.html', title="Mission Clock", missions=missions, clock_label=missions[idx]['label'],mission=missions[idx])
