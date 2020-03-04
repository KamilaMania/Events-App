# Events-App

An app created for browsing, editing and adding events and buying tickets for the same.
User can post comments for every ticket. 

For every ticket there is a ticket details page, where user can see who posted that ticket, what is the price for it, a picture of a ticket, fraud risk percentage, description and comments for that ticket.

Fraud risk percentage will show to users the risk they are taking when buying that ticket. The percentage is calculated using the following algorithm:

if the ticket is the only ticket of the author, add 10%
if the ticket price is lower than the average ticket price for that event, that's a risk
if a ticket is X% cheaper than the average price, add X% to the risk
if a ticket is X% more expensive than the average price, deduct X% from the risk, with a maximum of 10% deduction
if the ticket was added during business hours (9-17), deduct 10% from the risk, if not, add 10% to the risk
if there are >3 comments on the ticket, add 5% to the risk

The app is built with React & Redux on the frontend, and JavaScript, Express in the backend.

