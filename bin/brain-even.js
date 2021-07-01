#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import buildMatch from '../src/index.js';
import { even, rulesOfGame } from '../src/games/even.js';

buildMatch(rulesOfGame, even);