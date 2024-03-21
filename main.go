package main

import (
	"Monkey/repl"
	"fmt"
	"os"
	"os/user"
)

func main() {
	//goland:noinspection GoImportUsedAsName
	user, err := user.Current()
	if err != nil {
		panic(err)
	}
	fmt.Printf("Hello %s! This is the BY-Monkey programming language!\n",
		user.Username)
	fmt.Printf("Feel free to type in commands.\n")
	repl.Start(os.Stdin, os.Stdout)
}
