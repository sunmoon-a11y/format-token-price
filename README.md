![case1.png](src%2Fcomponents%2Fcase1.png)
![case2.png](src%2Fcomponents%2Fcase2.png)
![case3.png](src%2Fcomponents%2Fcase3.png)
![case4.png](src%2Fcomponents%2Fcase4.png)
![case5.png](src%2Fcomponents%2Fcase5.png)
![case6.png](src%2Fcomponents%2Fcase6.png)

e.g. Set the price information in the header
![case7.png](src%2Fcomponents%2Fcase7.png)
```
import { showLessAmount } from 'format-token-price'
// 0.00009299000499
showLessAmount("0.0000092000499", 4, 4) = 0.0₄9299
```

```
import { abandonInvalid0 } from 'format-token-price'
// e.g. abandon invalid 0, use 
// 0.00092000499
// 0.00092000499.fixed(8) = 0.00092000
abandonInvalid0("0.00092000499", 8) = 0.00092
```

![case8.png](src%2Fcomponents%2Fcase8.png)
![case9.png](src%2Fcomponents%2Fcase9.png)

When the token price is very small and there are multiple zeros, a subscript abbreviation is required. You can refer to this code

code = https://github.com/sunmoon-a11y/format-amount.git
