import MetaProps from 'types/Meta'

declare module '*/meta.json' {
    const value: MetaProps
    export = value
}