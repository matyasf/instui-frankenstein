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

import React, { Component } from 'react'

import { themeable } from '@instructure/ui-themeable'

import { Button, DateTimeInput, Heading } from '@instructure/ui'
import { Text } from '@instructure/ui'
import { View } from '@instructure/ui'
import { IconCheckMarkSolid } from '@instructure/ui'

import Panda from './Panda'

import styles from './styles.css'
import theme from './theme.js'

@themeable(theme, styles)
class Banner extends Component {
  render () {
    return (
      <View
        as="main"
        background="primary-inverse"
        padding="large medium none"
        minHeight="100%"
        textAlign="center"
      >
        <View
          padding="small"
          display="inline-block"
          background="success"
          borderRadius="large"
          shadow="topmost"
        >
          <IconCheckMarkSolid size="small" inline={false} />
        </View>
        <div className={styles.banner}>
          <View
            maxWidth="40rem"
            margin="0 auto"
            padding="x-large medium medium"
            display="block"
            background="alert"
            borderRadius="large"
            shadow="above"
          >
            <Panda />
            <Heading level="h1" margin="none none small">InstUI v7 and V8 frankenstein!</Heading>
            <Text size="large">Just edit <Text weight="bold" size="large">App.js</Text> to start building with Instructure UI.</Text>
            <Button>This is an InstUI v8 button</Button>
            <DateTimeInput
              description="dsc"
              invalidDateTimeMessage="invalid time"
              timeRenderLabel="time"
              prevMonthLabel="prev"
              dateRenderLabel="date"
              nextMonthLabel="next" />
          </View>
        </div>
      </View>
    )
  }
}

export default Banner
