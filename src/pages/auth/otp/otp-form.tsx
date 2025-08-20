import { Button, PinInput, Stack, StackProps } from '@mantine/core';

interface OtpFormProps extends Omit<StackProps, 'children'> {
  onSuccess?: () => void;
}

export function OtpForm({ onSuccess, ...props }: OtpFormProps) {
  return (
    <Stack {...props}>
      <PinInput placeholder="" length={6} />
      <Button>Verify OTP</Button>
    </Stack>
  );
}
