# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\Login.spec.ts >> @smoke Invalid Email
- Location: src\tests\ui\Login.spec.ts:15:10

# Error details

```
Error: toBeVisible can be only used with Locator object, was called with undefined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - insertion [ref=e11]:
        - iframe [ref=e13]:
          - generic [active] [ref=f38e1]:
            - generic [ref=f38e5]:
              - generic [ref=f38e6]:
                - link [ref=f38e7] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CF1zwPgs8aqD7JbyGnb8PxNGkgQ304YuDhwGtt7iP7xTd8sDv4gwQASD9tJ6VAWCZ_p6GuCGgAamGuu4CyAEJqQKzJokupRdXPqgDAcgDywSqBOwBT9B3k0SNRrcngMCAFghx3aur2zkO_KgxKwLnV5Jy4oHN6GYkKzJ9NHPjICv6O1VeKK1DDln-okzVDZEcvQXW_F2XPLaNIdt3wR3YGVqH0I1VYwOSOM7cW6hNWODjIiB_w6Xf4l0hV20ikri7gAxUSsaMTxtLE7KL5rZyw3-hro-I6lDA7m-BgZB34EKVriiRneJDwsRaRc-6O_c5bfgUmsrSG0gks1MwUWuPYQGlRTbAlPPnyJHwgBqFRf2GgKQNM_BJibWDjsSzTzxKGbRkE5P_vG1XV2Se52WaQ38CxvKga3HZiRFGhj8Nm8HABIDbmcXSBYgFmsPByFagBi7YBgKAB7_5xZEBqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcAoAjL7LIEsAgC0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljm98-Uq6CVA2ABsQnpFGolP9wPmIAKAZgLAcgLAYAMAaIMDCoKCgiO37ECleKxAqoNAlRSyA0B6g0TCNGX0ZSroJUDFTxD5wEdxCgp0IgOCbgT5APYEwqCFBgaFmF1dG9tYXRpb25leGVyY2lzZS5jb23QFQHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICrVEYLiIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMIoJLRlKuglQMVPEPnAR3EKCnQEAEYASAAEgJayvD_BwE&num=1&cid=CAQSnwIAEQoqgQCTMN4cA3FL4kNwXzGp8jVZRbui7VQvuXiGFegrUYne1RM6HDdhDUN8vVavxKB0S0a1xZFmgcrMGfD--bREzCIg1sYwQwl3iOajjAc0n8xivUkPGLUxcf3WW7oUdnLq-kHAhlc5IX24XCWGHcFpxc0VUWXo6TmO5RcTW0FB_F1IyD89cdVcxLE1oAkJ35GtMjk0HH0IBadSCjjXalrllQ8WBPEcujv8MH8fdrfa0w6cJKlA340-OVH89TSXHL7AfUZcY1VRJ97enCnswlDzP7lX8ezxZpfCYYiLt-hqhz8dpJdixN_uwjkRHyOSf9WFu1Lrg16jdGaJCmaZbNj3KiG4D0ik_mwSr6RSPw6LWwmkc6CKs2UjCR08DxgB&sig=AOD64_13hxatyKxN1lOzC55l2jfrgdZBlg&client=ca-pub-1677597403311019&rf=1&nb=19&adurl=https://www.yatasbedding.com.tr/tr/pet-yatagi-c-150106%3Fgad_source%3D5%26gad_campaignid%3D23237517722
                  - img [ref=f38e8]
                - link [ref=f38e9] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CF1zwPgs8aqD7JbyGnb8PxNGkgQ304YuDhwGtt7iP7xTd8sDv4gwQASD9tJ6VAWCZ_p6GuCGgAamGuu4CyAEJqQKzJokupRdXPqgDAcgDywSqBOwBT9B3k0SNRrcngMCAFghx3aur2zkO_KgxKwLnV5Jy4oHN6GYkKzJ9NHPjICv6O1VeKK1DDln-okzVDZEcvQXW_F2XPLaNIdt3wR3YGVqH0I1VYwOSOM7cW6hNWODjIiB_w6Xf4l0hV20ikri7gAxUSsaMTxtLE7KL5rZyw3-hro-I6lDA7m-BgZB34EKVriiRneJDwsRaRc-6O_c5bfgUmsrSG0gks1MwUWuPYQGlRTbAlPPnyJHwgBqFRf2GgKQNM_BJibWDjsSzTzxKGbRkE5P_vG1XV2Se52WaQ38CxvKga3HZiRFGhj8Nm8HABIDbmcXSBYgFmsPByFagBi7YBgKAB7_5xZEBqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcAoAjL7LIEsAgC0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljm98-Uq6CVA2ABsQnpFGolP9wPmIAKAZgLAcgLAYAMAaIMDCoKCgiO37ECleKxAqoNAlRSyA0B6g0TCNGX0ZSroJUDFTxD5wEdxCgp0IgOCbgT5APYEwqCFBgaFmF1dG9tYXRpb25leGVyY2lzZS5jb23QFQHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICrVEYLiIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMIoJLRlKuglQMVPEPnAR3EKCnQEAEYASAAEgJayvD_BwE&num=1&cid=CAQSnwIAEQoqgQCTMN4cA3FL4kNwXzGp8jVZRbui7VQvuXiGFegrUYne1RM6HDdhDUN8vVavxKB0S0a1xZFmgcrMGfD--bREzCIg1sYwQwl3iOajjAc0n8xivUkPGLUxcf3WW7oUdnLq-kHAhlc5IX24XCWGHcFpxc0VUWXo6TmO5RcTW0FB_F1IyD89cdVcxLE1oAkJ35GtMjk0HH0IBadSCjjXalrllQ8WBPEcujv8MH8fdrfa0w6cJKlA340-OVH89TSXHL7AfUZcY1VRJ97enCnswlDzP7lX8ezxZpfCYYiLt-hqhz8dpJdixN_uwjkRHyOSf9WFu1Lrg16jdGaJCmaZbNj3KiG4D0ik_mwSr6RSPw6LWwmkc6CKs2UjCR08DxgB&sig=AOD64_13hxatyKxN1lOzC55l2jfrgdZBlg&client=ca-pub-1677597403311019&rf=1&nb=9&adurl=https://www.yatasbedding.com.tr/tr/pet-yatagi-c-150106%3Fgad_source%3D5%26gad_campaignid%3D23237517722
                  - img [ref=f38e10]
              - link "Konforlu Uyku Yataş Bedding'de" [ref=f38e12] [cursor=pointer]:
                - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CF1zwPgs8aqD7JbyGnb8PxNGkgQ304YuDhwGtt7iP7xTd8sDv4gwQASD9tJ6VAWCZ_p6GuCGgAamGuu4CyAEJqQKzJokupRdXPqgDAcgDywSqBOwBT9B3k0SNRrcngMCAFghx3aur2zkO_KgxKwLnV5Jy4oHN6GYkKzJ9NHPjICv6O1VeKK1DDln-okzVDZEcvQXW_F2XPLaNIdt3wR3YGVqH0I1VYwOSOM7cW6hNWODjIiB_w6Xf4l0hV20ikri7gAxUSsaMTxtLE7KL5rZyw3-hro-I6lDA7m-BgZB34EKVriiRneJDwsRaRc-6O_c5bfgUmsrSG0gks1MwUWuPYQGlRTbAlPPnyJHwgBqFRf2GgKQNM_BJibWDjsSzTzxKGbRkE5P_vG1XV2Se52WaQ38CxvKga3HZiRFGhj8Nm8HABIDbmcXSBYgFmsPByFagBi7YBgKAB7_5xZEBqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcAoAjL7LIEsAgC0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljm98-Uq6CVA2ABsQnpFGolP9wPmIAKAZgLAcgLAYAMAaIMDCoKCgiO37ECleKxAqoNAlRSyA0B6g0TCNGX0ZSroJUDFTxD5wEdxCgp0IgOCbgT5APYEwqCFBgaFmF1dG9tYXRpb25leGVyY2lzZS5jb23QFQHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICrVEYLiIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMIoJLRlKuglQMVPEPnAR3EKCnQEAEYASAAEgJayvD_BwE&num=1&cid=CAQSnwIAEQoqgQCTMN4cA3FL4kNwXzGp8jVZRbui7VQvuXiGFegrUYne1RM6HDdhDUN8vVavxKB0S0a1xZFmgcrMGfD--bREzCIg1sYwQwl3iOajjAc0n8xivUkPGLUxcf3WW7oUdnLq-kHAhlc5IX24XCWGHcFpxc0VUWXo6TmO5RcTW0FB_F1IyD89cdVcxLE1oAkJ35GtMjk0HH0IBadSCjjXalrllQ8WBPEcujv8MH8fdrfa0w6cJKlA340-OVH89TSXHL7AfUZcY1VRJ97enCnswlDzP7lX8ezxZpfCYYiLt-hqhz8dpJdixN_uwjkRHyOSf9WFu1Lrg16jdGaJCmaZbNj3KiG4D0ik_mwSr6RSPw6LWwmkc6CKs2UjCR08DxgB&sig=AOD64_13hxatyKxN1lOzC55l2jfrgdZBlg&client=ca-pub-1677597403311019&rf=1&nb=0&adurl=https://www.yatasbedding.com.tr/tr/pet-yatagi-c-150106%3Fgad_source%3D5%26gad_campaignid%3D23237517722
              - generic [ref=f38e13]:
                - link "Yataş Bedding'de Evcil Dostunuzun Uykusunu İyileştirecek Pet Yataklar Sizi Bekliyor" [ref=f38e15] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CF1zwPgs8aqD7JbyGnb8PxNGkgQ304YuDhwGtt7iP7xTd8sDv4gwQASD9tJ6VAWCZ_p6GuCGgAamGuu4CyAEJqQKzJokupRdXPqgDAcgDywSqBOwBT9B3k0SNRrcngMCAFghx3aur2zkO_KgxKwLnV5Jy4oHN6GYkKzJ9NHPjICv6O1VeKK1DDln-okzVDZEcvQXW_F2XPLaNIdt3wR3YGVqH0I1VYwOSOM7cW6hNWODjIiB_w6Xf4l0hV20ikri7gAxUSsaMTxtLE7KL5rZyw3-hro-I6lDA7m-BgZB34EKVriiRneJDwsRaRc-6O_c5bfgUmsrSG0gks1MwUWuPYQGlRTbAlPPnyJHwgBqFRf2GgKQNM_BJibWDjsSzTzxKGbRkE5P_vG1XV2Se52WaQ38CxvKga3HZiRFGhj8Nm8HABIDbmcXSBYgFmsPByFagBi7YBgKAB7_5xZEBqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcAoAjL7LIEsAgC0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljm98-Uq6CVA2ABsQnpFGolP9wPmIAKAZgLAcgLAYAMAaIMDCoKCgiO37ECleKxAqoNAlRSyA0B6g0TCNGX0ZSroJUDFTxD5wEdxCgp0IgOCbgT5APYEwqCFBgaFmF1dG9tYXRpb25leGVyY2lzZS5jb23QFQHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICrVEYLiIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMIoJLRlKuglQMVPEPnAR3EKCnQEAEYASAAEgJayvD_BwE&num=1&cid=CAQSnwIAEQoqgQCTMN4cA3FL4kNwXzGp8jVZRbui7VQvuXiGFegrUYne1RM6HDdhDUN8vVavxKB0S0a1xZFmgcrMGfD--bREzCIg1sYwQwl3iOajjAc0n8xivUkPGLUxcf3WW7oUdnLq-kHAhlc5IX24XCWGHcFpxc0VUWXo6TmO5RcTW0FB_F1IyD89cdVcxLE1oAkJ35GtMjk0HH0IBadSCjjXalrllQ8WBPEcujv8MH8fdrfa0w6cJKlA340-OVH89TSXHL7AfUZcY1VRJ97enCnswlDzP7lX8ezxZpfCYYiLt-hqhz8dpJdixN_uwjkRHyOSf9WFu1Lrg16jdGaJCmaZbNj3KiG4D0ik_mwSr6RSPw6LWwmkc6CKs2UjCR08DxgB&sig=AOD64_13hxatyKxN1lOzC55l2jfrgdZBlg&client=ca-pub-1677597403311019&rf=1&nb=7&adurl=https://www.yatasbedding.com.tr/tr/pet-yatagi-c-150106%3Fgad_source%3D5%26gad_campaignid%3D23237517722
                  - text: Yataş Bedding'de Evcil Dostunuzun Uykusunu
                  - text: İyileştirecek Pet Yataklar Sizi Bekliyor
                - link [ref=f38e16] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CF1zwPgs8aqD7JbyGnb8PxNGkgQ304YuDhwGtt7iP7xTd8sDv4gwQASD9tJ6VAWCZ_p6GuCGgAamGuu4CyAEJqQKzJokupRdXPqgDAcgDywSqBOwBT9B3k0SNRrcngMCAFghx3aur2zkO_KgxKwLnV5Jy4oHN6GYkKzJ9NHPjICv6O1VeKK1DDln-okzVDZEcvQXW_F2XPLaNIdt3wR3YGVqH0I1VYwOSOM7cW6hNWODjIiB_w6Xf4l0hV20ikri7gAxUSsaMTxtLE7KL5rZyw3-hro-I6lDA7m-BgZB34EKVriiRneJDwsRaRc-6O_c5bfgUmsrSG0gks1MwUWuPYQGlRTbAlPPnyJHwgBqFRf2GgKQNM_BJibWDjsSzTzxKGbRkE5P_vG1XV2Se52WaQ38CxvKga3HZiRFGhj8Nm8HABIDbmcXSBYgFmsPByFagBi7YBgKAB7_5xZEBqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcAoAjL7LIEsAgC0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljm98-Uq6CVA2ABsQnpFGolP9wPmIAKAZgLAcgLAYAMAaIMDCoKCgiO37ECleKxAqoNAlRSyA0B6g0TCNGX0ZSroJUDFTxD5wEdxCgp0IgOCbgT5APYEwqCFBgaFmF1dG9tYXRpb25leGVyY2lzZS5jb23QFQHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICrVEYLiIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMIoJLRlKuglQMVPEPnAR3EKCnQEAEYASAAEgJayvD_BwE&num=1&cid=CAQSnwIAEQoqgQCTMN4cA3FL4kNwXzGp8jVZRbui7VQvuXiGFegrUYne1RM6HDdhDUN8vVavxKB0S0a1xZFmgcrMGfD--bREzCIg1sYwQwl3iOajjAc0n8xivUkPGLUxcf3WW7oUdnLq-kHAhlc5IX24XCWGHcFpxc0VUWXo6TmO5RcTW0FB_F1IyD89cdVcxLE1oAkJ35GtMjk0HH0IBadSCjjXalrllQ8WBPEcujv8MH8fdrfa0w6cJKlA340-OVH89TSXHL7AfUZcY1VRJ97enCnswlDzP7lX8ezxZpfCYYiLt-hqhz8dpJdixN_uwjkRHyOSf9WFu1Lrg16jdGaJCmaZbNj3KiG4D0ik_mwSr6RSPw6LWwmkc6CKs2UjCR08DxgB&sig=AOD64_13hxatyKxN1lOzC55l2jfrgdZBlg&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://www.yatasbedding.com.tr/tr/pet-yatagi-c-150106%3Fgad_source%3D5%26gad_campaignid%3D23237517722
                  - img [ref=f38e18]
            - generic [ref=f38e22]:
              - generic:
                - img [ref=f38e26] [cursor=pointer]
                - button [ref=f38e28] [cursor=pointer]:
                  - img [ref=f38e29]
            - iframe
      - list [ref=e16]:
        - listitem [ref=e17]:
          - link " Home" [ref=e18]:
            - /url: /
            - generic [ref=e19]: 
            - text: Home
        - listitem [ref=e20]:
          - link " Products" [ref=e21]:
            - /url: /products
            - generic [ref=e22]: 
            - text: Products
        - listitem [ref=e23]:
          - link " Cart" [ref=e24]:
            - /url: /view_cart
            - generic [ref=e25]: 
            - text: Cart
        - listitem [ref=e26]:
          - link " Signup / Login" [ref=e27]:
            - /url: /login
            - generic [ref=e28]: 
            - text: Signup / Login
        - listitem [ref=e29]:
          - link " Test Cases" [ref=e30]:
            - /url: /test_cases
            - generic [ref=e31]: 
            - text: Test Cases
        - listitem [ref=e32]:
          - link " API Testing" [ref=e33]:
            - /url: /api_list
            - generic [ref=e34]: 
            - text: API Testing
        - listitem [ref=e35]:
          - link " Video Tutorials" [ref=e36]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e37]: 
            - text: Video Tutorials
        - listitem [ref=e38]:
          - link " Contact us" [ref=e39]:
            - /url: /contact_us
            - generic [ref=e40]: 
            - text: Contact us
  - generic [ref=e43]:
    - generic [ref=e45]:
      - heading "Login to your account" [level=2] [ref=e46]
      - generic [ref=e47]:
        - generic: bq1rdp8Nkbfi1vg6KFZtyG6mSkNHjx126rLdmM7vL5dD8omHAMdx77D1LGOCJfgW
        - textbox "Email Address" [ref=e48]: wrong@test.com
        - textbox "Password" [ref=e49]: "123456"
        - paragraph [ref=e50]: Your email or password is incorrect!
        - button "Login" [ref=e51] [cursor=pointer]
    - generic:
      - insertion:
        - generic:
          - iframe
    - heading "OR" [level=2] [ref=e53]
    - generic [ref=e55]:
      - heading "New User Signup!" [level=2] [ref=e56]
      - generic [ref=e57]:
        - generic: bq1rdp8Nkbfi1vg6KFZtyG6mSkNHjx126rLdmM7vL5dD8omHAMdx77D1LGOCJfgW
        - textbox "Name" [ref=e58]
        - textbox "Email Address" [ref=e59]
        - generic: signup
        - button "Signup" [ref=e60] [cursor=pointer]
  - generic:
    - insertion:
      - generic:
        - iframe
  - contentinfo [ref=e61]:
    - generic [ref=e66]:
      - heading "Subscription" [level=2] [ref=e67]
      - generic [ref=e68]:
        - textbox "Your email address" [ref=e69]
        - button "" [ref=e70] [cursor=pointer]:
          - generic [ref=e71]: 
        - paragraph [ref=e72]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e76]: Copyright © 2021 All rights reserved
  - link "" [ref=e77]:
    - /url: "#top"
    - generic [ref=e78]: 
  - generic:
    - insertion:
      - generic:
        - iframe
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/pagesFixture';
  2  | import { loginData, users } from '../../data/loginData/login';
  3  | 
  4  | //test('User should login successfully', async ({ loginPage  }) => {
  5  |   //  await loginPage.navigateToLoginPage();
  6  | 
  7  |     //await loginPage.login(
  8  |       //  loginData.validUser.email,
  9  |         //loginData.validUser.password);
  10 | 
  11 | //    await expect(loginPage.loggedInText).toBeVisible();});
  12 | 
  13 | users.forEach(user => {
  14 | 
  15 |      test(`@smoke ${user.scenario}`,async ({ loginPage }) => {
  16 | 
  17 |         await loginPage.navigateToLoginPage();
  18 | 
  19 |         await loginPage.login(
  20 |             user.email,
  21 |             user.password
  22 |         );
  23 | 
  24 |         if (user.expected === 'success') {
  25 |             await expect(loginPage.loggedInText).toBeVisible();
  26 |         } else {
> 27 |             await expect(loginPage.loginErrorMessage).toBeVisible();
     |                                                       ^ Error: toBeVisible can be only used with Locator object, was called with undefined
  28 |         }
  29 |     });
  30 | 
  31 | });
```