section .data
    msg db 'Hello, World!', 0xA ; The message and a newline character
    len equ $ - msg ; Calculate the length of the message

section .text
    global _start ; Entry point for the program

_start:
    ; System call to write (sys_write)
    mov rax, 1 ; System call number for write (Linux x86-64)
    mov rdi, 1 ; File descriptor (1 = stdout)
    mov rsi, msg ; Pointer to the message
    mov rdx, len ; Length of the message
    syscall ; Call the kernel

    ; System call to exit (sys_exit)
    mov rax, 60 ; System call number for exit
    xor rdi, rdi ; Exit status 0
    syscall ; Call the kernel
