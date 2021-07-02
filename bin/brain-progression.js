#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import buildMatch from '../src/index.js';
import { game, rulesOfGame } from '../src/games/progression.js';

buildMatch(rulesOfGame, game);