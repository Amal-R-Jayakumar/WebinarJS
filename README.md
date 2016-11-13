# WebinarJS - A MEAN stack webinar

[![Build Status](https://travis-ci.org/SherlockStd/WebinarJS.svg?branch=master)](https://travis-ci.org/SherlockStd/WebinarJS)

A clone of WebinarJam built on MEAN stack (MongoDB, ExpressJS, AngularJS, NodeJS) and Socket.io


# Features
* Unlimited Webinars
* Chat System
* Audience Counter

# Installation
Clone project repo:

```bash
git clone https://github.com/SherlockStd/WebinarJS.git
```

Install dependencies:

```bash
npm install
```

Launch MongoDB daemon :

```bash
sudo mongod &>/dev/null &
```


Then build the client side:

```bash
grunt build
```

And start the express server:

```bash
npm start
```

# Todo
- [ ] Homepage with upcoming webinars and replay
- [ ] Display important info on top of chat
- [ ] Every attendees have a unique link
- [ ] Registration page remember the name of attendees and use them for the chat
- [ ] Translations
- [ ] Presenters infos (Name, Mail, Photo, etc ...)
- [ ] Reminders (Email notifications)

##### Templates system
- [ ] Registration page
- [ ] Reminders emails
- [ ] Thanks you page templates (date and hour, link to webinar, set reminder in calendar, text, video, etc ...)


##### Live
- [ ] Survey during live
- [ ] Offers during live (possibility to embed countdown or stock, etc ...)
- [ ] Video injection on live
- [ ] Social media share buttons

##### Replay
- [ ] Enable or disable replay
- [ ] Replay type 1: Custom video (post-processing need)
- [ ] Replay type 2: Replay with events recorded during live (survey, offers, chat comments, video injection etc ...)
- [ ] Replay type 3: Redirect to an url
- [ ] Expiration date for replay
- [ ] Questions send to admin mail box during replay
- [ ] Social media share buttons

##### Monetization
- [ ] Charge or not the webinar registration

##### Administration panel
- [ ] Broadcast questions (display hover live video) to answer in live
- [ ] Attendees list
- [ ] Open a new tab on all attendees browsers
- [ ] Invite as a speaker (redirect on hangouts)
- [ ] Chart updated every 5 minutes of audience counter
- [ ] How many attendees came / how many registered 
- [ ] Survey, Offers and Video Injection controls

##### Analytics
- [ ] Registrants and rate
- [ ] Live & Replay Attendees and rate
- [ ] Live broadcast length
- [ ] Average time in live & replay room
- [ ] Clicks on offers (live & replay)
- [ ] Download chat history
- [ ] Monetization (registration fees, sales, etc ...)
- [ ] Registrants & Attendees list

##### Integrations
- [ ] Autoresponder (Aweber, Mailchimps, etc ...)
- [ ] 3rd party tracking systems (Google Analytics, Facebook Pixel, etc ...)


# Credits
[Chat icon](http://www.flaticon.com/free-icon/speech-bubble_130958) made by [Iconnice](http://www.flaticon.com/authors/iconnice) under [CC 3.0](http://creativecommons.org/licenses/by/3.0/CC)

[Group icon](http://www.flaticon.com/free-icon/users-group_32441) made by [Freepik](http://www.flaticon.com/authors/freepik) under [CC 3.0](http://creativecommons.org/licenses/by/3.0/CC)
