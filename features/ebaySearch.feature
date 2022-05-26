Feature: The client search in the view page

Scenario Outline: The client search by "pilas" in ebay page

  Given The client is in the <page>
  When The client search for the <word>
  Then The client count the results

    Examples:
      | page                 | word  |
      | https://www.ebay.com | pilas |

