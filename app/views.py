#!/usr/bin/env python

from app import app
import flask

missions = [
# stand in array of  missionss
        {
            'label':'UTC',
            'launch_date':'1970-01-01T00:00:00Z',
            'url':'/utc'
        },
        {
            'label':'M-Cubed',
            'launch_date':'2011-10-28T19:48:01Z',
            'url':'/m-cubed'
        }
    ]
    
@app.route('/')
@app.route('/index')
@app.route('/utc')
def index():
    return flask.render_template('index.html', title="Mission Clock", missions=missions, clock_label='UTC',mission=missions[0])

@app.route('/m-cubed')
def m_cubed():
    return flask.render_template('index.html', title="Mission Clock", missions=missions, clock_label='M-Cubed', mission=missions[1])
