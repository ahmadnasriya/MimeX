[![N|Solid](https://static.wixstatic.com/media/72ffe6_da8d2142d49c42b29c96ba80c8a91a6c~mv2.png)](https://nasriya.net)

# MimeX

[![NPM License](https://img.shields.io/npm/l/%40nasriya%2Fmimex?color=lightgreen)](https://github.com/nasriyasoftware/MimeX?tab=License-1-ov-file) ![NPM Version](https://img.shields.io/npm/v/%40nasriya%2Fmimex) ![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40nasriya%2Fmimex) ![Last Commit](https://img.shields.io/github/last-commit/nasriyasoftware/MimeX.svg) [![Status](https://img.shields.io/badge/Status-Stable-lightgreen.svg)](link-to-your-status-page)

##### Visit us at [www.nasriya.net](https://nasriya.net).

Made with ❤️ in **Palestine** 🇵🇸

___
## Overview
Mimex is a lightweight TypeScript/JavaScript utility for handling file extensions and MIME types. It provides an easy-to-use manager to look up MIME types from file extensions and vice versa, with full type safety when used in TypeScript projects.

Key features include:
- Retrieve one or multiple MIME types associated with a file extension.
- Retrieve all file extensions associated with a MIME type.
- Predefined, comprehensive list of common file extensions and MIME types.
- Fully typed for TypeScript with literal types for complete type safety.
- Exposes convenient readonly lists of all supported MIME types and extensions.

> [!IMPORTANT]
> 
> 🌟 **Support Our Open-Source Development!** 🌟
> We need your support to keep our projects going! If you find our work valuable, please consider contributing. Your support helps us continue to develop and maintain these tools.
> 
> **[Click here to support us!](https://fund.nasriya.net/)**
> 
> Every contribution, big or small, makes a difference. Thank you for your generosity and support!
___
## Installation

```bash
npm install @nasriya/mimex
```
___
## Usage

```js
import mimex from '@nasriya/mimex'

// Get MIME type(s) from extension
const mime = mimex.getMimes('.png') // ['image/png']

// Get extension(s) from MIME type
const ext = mimex.getExtensions('image/png') // ['.png']

// Check if a MIME type is supported
const isMimeSupported = mimex.isMime('image/png') // true
const isMimeUnknown = mimex.isMime('application/unknown') // false

// Check if an extension is supported
const isExtSupported = mimex.isExtension('.png') // true
const isExtWithoutDot = mimex.isExtension('png') // true
const isExtUnknown = mimex.isExtension('.unknown') // false

// Access all supported MIME types and extensions
console.log(mimex.mimes)       // ['image/webp', 'audio/aac', ...]
console.log(mimex.extensions)  // ['.webp', '.aac', ...]
```
___
## License
This software is licensed under the **Nasriya Open License (NOL)**, version 1.0.
Please read the license from [here](https://github.com/nasriyasoftware/MimeX?tab=License-1-ov-file).