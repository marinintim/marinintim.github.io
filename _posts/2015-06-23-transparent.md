---
title: transparent in linear-gradient in Safari
lang: 'en'
---

Apparently, transparent is the new black in Safari and older browsers when it comes down to `linear-gradient`.
I have noticed this behaviour yesterday, when tried to do fade away element with this CSS:

    background: linear-gradient(to right, transparent, #fff 90%);

...and then suddenly it didn't work in Safari as I planned. Here are some screenshots:

<style>
  .transparent-screenshots figure {
    display: inline-block;
    vertical-align: top;
    margin: 1em 1em 1em 0;
    width: calc(100% / 4 - 4em);
  }
  .transparent-screenshots img {
    max-height: 2em;
  }

  .transparent-screenshots {
    font-size: 0.8em;
  }
</style>

<section class="transparent-screenshots">

<figure>
  <img src="/img/transparent/Windows_8.1_Internet_Explorer_11_1024x768_chromeless.png" alt="/img/transparent/Windows_8.1_Internet_Explorer_11_1024x768_chromeless.png">
  <figcaption>IE 11 at Windows 8.1</figcaption>
</figure>

<figure>
  <img src="/img/transparent/Windows_8_Internet_Explorer_10_1024x768_chromeless.png" alt="/img/transparent/Windows_8_Internet_Explorer_10_1024x768_chromeless.png">
  <figcaption>IE 10 at Windows 8</figcaption>
</figure>

<figure>
  <img src="/img/transparent/Windows_Vista_Firefox_35_1024x768_chromeless.png" alt="/img/transparent/Windows_Vista_Firefox_35_1024x768_chromeless.png">
  <figcaption>Firefox 35 at Windows Vista (look at FF 36)</figcaption>
</figure>

<figure>
  <img src="/img/transparent/Windows_7_64-Bit_Google_Chrome_43_1024x768_chromeless.png" alt="/img/transparent/Windows_7_64-Bit_Google_Chrome_43_1024x768_chromeless.png">
  <figcaption>Google Chrome 43 at Windows 7</figcaption>
</figure>

<figure>
  <img src="/img/transparent/iPad_Air_8.1_Simulator_Mobile_Safari_8.0_1024x768_chromeless.png" alt="/img/transparent/iPad_Air_8.1_Simulator_Mobile_Safari_8.0_1024x768_chromeless.png">
  <figcaption>Mobile Safari 8.0 at iPad Air 8.1 (simulated)</figcaption>
</figure>

<figure>
  <img src="/img/transparent/iPhone_6_8.1_Simulator_Mobile_Safari_8.0_750x1334_chromeless.png" alt="/img/transparent/iPhone_6_8.1_Simulator_Mobile_Safari_8.0_750x1334_chromeless.png">
  <figcaption>Mobile Safari 8.0 at iphone 6.8.1 (simulated)</figcaption>
</figure>

<figure>
  <img src="/img/transparent/Windows_Vista_Internet_Explorer_8_1024x768_chromeless.png" alt="/img/transparent/Windows_Vista_Internet_Explorer_8_1024x768_chromeless.png">
  <figcaption>IE 8 at Windows Vista (no gradient at all)</figcaption>
</figure>

<figure>
  <img src="/img/transparent/Android_Nexus_9_5.0_Chrome_Mobile_39_1536x2048_chromeless.png" alt="/img/transparent/Android_Nexus_9_5.0_Chrome_Mobile_39_1536x2048_chromeless.png">
  <figcaption>Chrome Mobile 39 at Android Nexus 9.5.0</figcaption>
</figure>

<figure>
  <img src="/img/transparent/Windows_XP_SP3_Google_Chrome_41_1024x768_chromeless.png" alt="/img/transparent/Windows_XP_SP3_Google_Chrome_41_1024x768_chromeless.png">
  <figcaption>Google Chrome 41 at Windows XP SP3</figcaption>
</figure>

<figure>
  <img src="/img/transparent/Mac_OSX_10.10_Opera_29_1024x768_chromeless.png" alt="/img/transparent/Mac_OSX_10.10_Opera_29_1024x768_chromeless.png">
  <figcaption>Opera 29 at Mac OS X 10.10</figcaption>
</figure>

<figure>
  <img src="/img/transparent/Mac_OSX_10.6_Opera_12.12_1024x768_chromeless.png" alt="/img/transparent/Mac_OSX_10.6_Opera_12.12_1024x768_chromeless.png">
  <figcaption>Opera 12.12 at Mac OS X 10.6</figcaption>
</figure>

<figure>
  <img src="/img/transparent/Mac_OSX_10.10_Safari_8_1024x768_chromeless.png" alt="/img/transparent/Mac_OSX_10.10_Safari_8_1024x768_chromeless.png">
  <figcaption>Safari 8 at Mac OS X 10.10</figcaption>
</figure>

<figure>
  <img src="/img/transparent/Windows_7_Firefox_36_1024x768_chromeless.png" alt="/img/transparent/Windows_7_Firefox_36_1024x768_chromeless.png">
  <figcaption>Firefox 36 at Windows 7</figcaption>
</figure>

<figure>
  <img src="/img/transparent/Windows_7_Google_Chrome_42_1024x768_chromeless.png" alt="/img/transparent/Windows_7_Google_Chrome_42_1024x768_chromeless.png">
  <figcaption>Google Chrome 42 at Windows 7</figcaption>
</figure>

<figure>
  <img src="/img/transparent/Windows_8_Firefox_37_1024x768_chromeless.png" alt="/img/transparent/Windows_8_Firefox_37_1024x768_chromeless.png">
  <figcaption>Firefox 37 at Windows 8</figcaption>
</figure>

<figure>
  <img src="/img/transparent/Windows_7_Internet_Explorer_9_1024x768_chromeless.png" alt="/img/transparent/Windows_7_Internet_Explorer_9_1024x768_chromeless.png">
  <figcaption>IE 9 at Windows 7 (no gradient at all)</figcaption>
</figure>

<p>Screenshots are courtesy of <a href="https://crossbrowsertesting.com">CrossBrowserTesting</a> which allows you to screenshot your codepens for free.</p>
</section>

After changing `transparent` to `rgba(255, 255, 255, 0)` it worked as expected.
