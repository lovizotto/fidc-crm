import { AppShell } from "@mantine/core"
import Head from "next/head"

export const Layout = ({children}) => {
    return (<div>
        <Head>
            <title>Fidc - CRM</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <AppShell
            padding="md"
            navbarOffsetBreakpoint="sm"
            fixed
            styles={theme => ({
                main: {
                    backgroundColor: theme.colors.gray[0]
                }
            })}
        >
            {children}
        </AppShell>
    </div>)
}