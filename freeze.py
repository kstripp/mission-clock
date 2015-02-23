#!/usr/bin/env python

from flask_frozen import Freezer
import app

FREEZER_RELATIVE_URLS=True

freezer = Freezer(app.app)

app.debug = False
app.testing = True

@freezer.register_generator
def clocks():
    for mission in app.views.missions:
        yield mission['url']

if __name__ == "__main__":
    freezer.freeze()
#    freezer.run(debug=True)
