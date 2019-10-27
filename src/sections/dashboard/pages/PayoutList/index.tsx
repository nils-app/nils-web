import React, { useEffect } from "react";
import { Table, Alert } from "react-bootstrap";
import classNames from "classnames";
import { useImmer } from "use-immer";

import { printDate } from "util/date";
import { useStateValue } from "store/state";
import { TW_Transfer } from "./types";
import { fetchResource } from "util/fetch";

type State = {
  twPayouts: {
    [key: string]: TW_Transfer,
  },
};

export default () => {
  const { state } = useStateValue();
  const [localState, setState] = useImmer<State>({
    twPayouts: {},
  });

  useEffect(() => {
    if (state.payouts.length > 0) {
      state.payouts.forEach(payout => {
        const tx_id = payout.tx_id;

        fetchResource(
          `/payouts/${tx_id}`,
          'GET',
        ).then((data: TW_Transfer) => {
          setState(draft => {
            draft.twPayouts[tx_id] = data;
          });
          console.log('tx info', data);
        }, (error: any) => {
          console.error(error);
        });
      });
    }
  }, [state.payouts, setState]);

  return (
    <>
      <div className="table-widget">
        <Table responsive striped size='sm'>
          <thead>
            <tr>
              <th>
                Amount
              </th>
              <th>
                Created On
              </th>
              <th>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            { state.payouts.map(payout => (
              <tr key={ payout.uuid } className={ classNames('hover-show') }>
                <td>{ payout.amount_fiat } { payout.currency }</td>
                <td>{ printDate(payout.created_on) }</td>
                <td>{ localState.twPayouts[payout.tx_id]? localState.twPayouts[payout.tx_id].status : '' }</td>
              </tr>
            )) }
          </tbody>
        </Table>
        { state.payouts.length < 1 && (
          <Alert variant='warning' className='mx-3'>
            No payouts have been scheduled yet. <br/>
            Your first payout will be scheduled soon after your balance reaches the minimum of 1000 Nils.
          </Alert>
        ) }
      </div>
    </>
  );
};
