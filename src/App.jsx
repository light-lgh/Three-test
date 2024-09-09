import React, { Component } from 'react';
import { Button, Toast } from '@douyinfe/semi-ui';

export const SemiApp = () => {
    return (
        <Button onClick={() => Toast.warning({ content: 'welcome' })}>Hello setting</Button>
        
    )
}