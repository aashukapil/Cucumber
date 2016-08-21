$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/aashu/Documents/workspace/CucumberForJavaBook/features/checkout.feature");
formatter.feature({
  "line": 1,
  "name": "Checkout",
  "description": "",
  "id": "checkout",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Checkout a banana",
  "description": "",
  "id": "checkout;checkout-a-banana",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "the price of a \"banana\" is 40c",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I checkout 1 \"banana\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the total price should be 40c",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "banana",
      "offset": 16
    },
    {
      "val": "40",
      "offset": 27
    }
  ],
  "location": "CheckoutSteps.thePriceOfAIsC(String,int)"
});
formatter.result({
  "duration": 95291322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    },
    {
      "val": "banana",
      "offset": 14
    }
  ],
  "location": "CheckoutSteps.iCheckout(int,String)"
});
formatter.result({
  "duration": 147539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 26
    }
  ],
  "location": "CheckoutSteps.theTotalPriceShouldBeC(int)"
});
formatter.result({
  "duration": 2564561,
  "status": "passed"
});
});