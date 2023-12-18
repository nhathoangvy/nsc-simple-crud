
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract stocks(func: string, symbol: string): Nullable<Stocks> | Promise<Nullable<Stocks>>;
}

export class Stocks {
    __typename?: 'Stocks';
    data: string;
}

type Nullable<T> = T | null;
