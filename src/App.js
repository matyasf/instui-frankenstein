/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from 'react'
import Banner from './Banner'

import '@instructure/canvas-theme'
import { instructure } from '@instructure/ui'
import {ThemeRegistry as ThemeRegistryV7 } from '@instructure/ui-themeable'
import {ThemeRegistry as ThemeRegistryV8 } from '@instructure/theme-registry'

instructure.use({
  overrides: {
    typography: {
      fontSizeLarge: "5.555rem"
    }
  }
})
// this is only needed if one overrides a theme
const overriddenTheme = ThemeRegistryV8.getCurrentTheme()
const proxiedTheme = new Proxy(overriddenTheme, {
  get(target, property) {
    const { key, description, use, ...variables } = target
    // this is needed for backwards compatible reasons,
    // themes used to have a 'variables' property on it that we deleted in v8 but is actually needed for canvas
    if (property === 'variables') {
      return variables
    }
    return Reflect.get(target, property)
  }
})
// register a V8 theme to Instui v7
ThemeRegistryV7.registerTheme(proxiedTheme)
// this is enough if the theme is not overridden
//ThemeRegistryV7.registerTheme(instructure)

console.log("registered themes", ThemeRegistryV7.getRegisteredThemes())
debugger
const App = () =>
    <Banner />
export default App
