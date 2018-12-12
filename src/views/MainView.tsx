import * as React from 'react';
import Test from './components/test/container';

export interface Props {}

export interface State {}

export class MainView extends React.Component<Props, State> {
  public render() {
    return (
      <React.Fragment>
        <h1>Test</h1>
        <Test />
      </React.Fragment>
    );
  }
}
