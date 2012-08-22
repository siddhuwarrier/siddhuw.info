#Siddhu's Website

This is the source code for my website. It's hosted on Heroku for absolutely nothing.

## Getting Started

* Clone the github repository
* Set up your environment by executing the following commands (tested on Mac OS X). I assume you have Homebrew installed.

		$ easy_install pip
		$ pip install virtualenv

* Download the PostGRES app (Thank you, Heroku!) [here](http://postgresapp.com/download), move it to `/Applications` (edit your setup_env.sh if you decide to put the .app file somewhere else).

* Create a database called `website` by executing the following command:
		
		$ /Applications/Postgres.app/Contents/MacOS/bin/createdb website

* Perform initial setup
		source ./setup_env.sh
		
* Install required dependencies using `pip`
		
		$ pip install -r requirements.txt
		
* Set up the database
	
		$ ./manage.py syncdb --all
		$ ./manage.py migrate --fake #Move your migration history forward
		
* Check everything works

		$ ./manage.py runserver
  and visiting [http://localhost:8000](http://localhost:8000).
		
> Recommended: Do try the git flow branching model out. You can get it by running `brew install git-flow` on your terminal.

	
