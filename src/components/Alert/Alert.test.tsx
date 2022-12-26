import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Alert, { BaseAlertProps } from './Alert';

const testAlertProps: BaseAlertProps = {
  message: 'testMessage',
  description: 'testDescription',
  type: 'error',
  closable: true,
};

describe('test Alert component', () => {
  it('should render the correct default Alert', async () => {
    render(<Alert data-testid="alert" />);
    const alert = screen.getByTestId('alert');
    expect(alert).toBeInTheDocument();
    expect(alert.tagName).toEqual('DIV');
    expect(alert).toHaveClass('alert alert-success');
    expect(screen.queryByText('᙮')).not.toBeInTheDocument(); // 不存在关闭图标
  });
  it('should render the correct component based on different props', async () => {
    render(<Alert data-testid="errorAlert" {...testAlertProps} />);
    const testAlert = screen.getByText('testMessage');
    const errorAlert = screen.getByTestId('errorAlert');
    expect(testAlert).toBeInTheDocument();
    expect(errorAlert).toHaveClass('alert alert-error');

    const closeAlert = screen.getByText('᙮');
    fireEvent.click(closeAlert);
    await waitFor(() => {
      expect(closeAlert).not.toBeInTheDocument();
    });
  });
});
