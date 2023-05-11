from config import app

from before_requests import *
from static_controller import *
from sessions_controller import *

if __name__ == '__main__':
    app.run(port=5555, debug=True)
