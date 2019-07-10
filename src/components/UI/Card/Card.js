import React from 'react';
import { Card, Avatar } from 'antd';
const { Meta } = Card;

class CardComp extends React.Component {

    render() {
        return (
            <Card
                style={{ width: 300, marginTop: 6 }}
                bodyStyle={{ padding: 10 }}>
                <Meta
                    avatar={
                        <Avatar shape="square" size={54} src={this.props.img} />
                    }
                    title="Show details"
                    description={this.props.switch}
                />
            </Card>
        )
    }
};
export default CardComp 