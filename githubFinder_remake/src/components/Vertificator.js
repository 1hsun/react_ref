//@flow
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ResultContainer from '../containers/ResultContainer'
import type { parentProps } from '../constants/componentTypes'

let authCheck;
export default function Vertificator({ data }:parentProps) {
  (data) ? authCheck = data.authed : authCheck = false;
  return (
    <Route
      render={(data) => (authCheck === true)
        ? <ResultContainer {...data} />
        : <Redirect to='/' />
      }
    />
  )
}