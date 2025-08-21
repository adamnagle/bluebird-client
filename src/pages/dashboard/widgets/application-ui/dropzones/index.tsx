import { 
  Container, 
  Title, 
  Text, 
  Stack, 
  SimpleGrid,
  Group,
  Button,
  Image,
  ActionIcon,
  List,
  rem,
  Progress,
  Box
} from '@mantine/core'
import { 
  IconCloudUpload, 
  IconDownload, 
  IconX, 
  IconPhoto,
  IconUpload,
  IconFile,
  IconFileText,
  IconTrash
} from '@tabler/icons-react'
import { Dropzone, MIME_TYPES, DropzoneProps } from '@mantine/dropzone'
import { Page, PageHeader } from '@/components'
import { useRef, useState } from 'react'
import classes from './dropzones.module.css'

// 1. Basic Dropzone with Button
function DropzoneButton() {
  const openRef = useRef<() => void>(null)

  return (
    <div>
      <Title order={4} mb="md">Dropzone with Button</Title>
      <Text size="sm" c="dimmed" mb="lg">
        A dropzone with an overlay button for file selection. Perfect for resume uploads and document handling.
      </Text>
      
      <div className={classes.wrapper}>
        <Dropzone
          openRef={openRef}
          onDrop={(files) => console.log('accepted files', files)}
          className={classes.dropzone}
          radius="md"
          accept={[MIME_TYPES.pdf]}
          maxSize={30 * 1024 ** 2}
        >
          <div style={{ pointerEvents: 'none' }}>
            <Group justify="center">
              <Dropzone.Accept>
                <IconDownload size={50} color="var(--mantine-color-blue-6)" stroke={1.5} />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX size={50} color="var(--mantine-color-red-6)" stroke={1.5} />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconCloudUpload size={50} stroke={1.5} className={classes.icon} />
              </Dropzone.Idle>
            </Group>

            <Text ta="center" fw={700} fz="lg" mt="xl">
              <Dropzone.Accept>Drop files here</Dropzone.Accept>
              <Dropzone.Reject>PDF file less than 30mb</Dropzone.Reject>
              <Dropzone.Idle>Upload resume</Dropzone.Idle>
            </Text>

            <Text className={classes.description}>
              Drag&apos;n&apos;drop files here to upload. We can accept only <i>.pdf</i> files that
              are less than 30mb in size.
            </Text>
          </div>
        </Dropzone>

        <Button 
          className={classes.control} 
          size="md" 
          radius="xl" 
          onClick={() => openRef.current?.()}
        >
          Select files
        </Button>
      </div>
    </div>
  )
}

// 2. Image Dropzone
function ImageDropzone() {
  const [files, setFiles] = useState<File[]>([])

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file)
    return (
      <Image
        key={index}
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
        radius="md"
        h={80}
        w={80}
        fit="cover"
      />
    )
  })

  return (
    <div>
      <Title order={4} mb="md">Image Dropzone</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Specialized dropzone for image uploads with instant preview functionality.
      </Text>

      <Dropzone
        onDrop={setFiles}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={5 * 1024 ** 2}
        accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.webp]}
        className={classes.imageDropzone}
      >
        <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
          <Dropzone.Accept>
            <IconUpload
              style={{
                width: rem(52),
                height: rem(52),
                color: 'var(--mantine-color-blue-6)',
              }}
              stroke={1.5}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              style={{
                width: rem(52),
                height: rem(52),
                color: 'var(--mantine-color-red-6)',
              }}
              stroke={1.5}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto
              style={{
                width: rem(52),
                height: rem(52),
                color: 'var(--mantine-color-dimmed)',
              }}
              stroke={1.5}
            />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>

      {previews.length > 0 && (
        <SimpleGrid cols={{ base: 1, sm: 4 }} mt="xl">
          {previews}
        </SimpleGrid>
      )}
    </div>
  )
}

// 3. Multiple File Types Dropzone
function MultipleFileDropzone() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploading, setUploading] = useState(false)

  const handleDrop = (files: File[]) => {
    setUploading(true)
    setUploadProgress(0)
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploading(false)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <div>
      <Title order={4} mb="md">Multiple File Types</Title>
      <Text size="sm" c="dimmed" mb="lg">
        Accepts various file types including documents, images, and archives with upload progress.
      </Text>

      <Dropzone
        onDrop={handleDrop}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={50 * 1024 ** 2}
        accept={[
          MIME_TYPES.pdf,
          MIME_TYPES.png,
          MIME_TYPES.jpeg,
          MIME_TYPES.docx,
          MIME_TYPES.xlsx,
          MIME_TYPES.zip,
        ]}
        loading={uploading}
      >
        <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
          <Dropzone.Accept>
            <IconUpload
              style={{
                width: rem(52),
                height: rem(52),
                color: 'var(--mantine-color-blue-6)',
              }}
              stroke={1.5}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              style={{
                width: rem(52),
                height: rem(52),
                color: 'var(--mantine-color-red-6)',
              }}
              stroke={1.5}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconFile
              style={{
                width: rem(52),
                height: rem(52),
                color: 'var(--mantine-color-dimmed)',
              }}
              stroke={1.5}
            />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drop any files here
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              We support PDF, DOC, XLS, ZIP, and image files up to 50mb
            </Text>
            
            <List size="sm" mt="md" c="dimmed">
              <List.Item>Documents: PDF, DOCX, XLSX</List.Item>
              <List.Item>Images: PNG, JPEG, WebP</List.Item>
              <List.Item>Archives: ZIP files</List.Item>
            </List>
          </div>
        </Group>
      </Dropzone>

      {uploading && (
        <Box mt="md">
          <Text size="sm" mb="xs">Uploading files... {uploadProgress}%</Text>
          <Progress value={uploadProgress} size="sm" />
        </Box>
      )}
    </div>
  )
}

// 4. Simple Text Dropzone
function SimpleDropzone() {
  const [files, setFiles] = useState<File[]>([])

  return (
    <div>
      <Title order={4} mb="md">Simple Text Dropzone</Title>
      <Text size="sm" c="dimmed" mb="lg">
        A minimalist dropzone design focused on text documents and simple file uploads.
      </Text>

      <Dropzone
        onDrop={setFiles}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={10 * 1024 ** 2}
        accept={['text/plain', MIME_TYPES.pdf, MIME_TYPES.docx]}
        className={classes.simpleDropzone}
      >
        <Text ta="center" fw={700} fz="lg">
          <Dropzone.Accept>Drop your documents here</Dropzone.Accept>
          <Dropzone.Reject>Only text files are accepted</Dropzone.Reject>
          <Dropzone.Idle>Click or drag documents to upload</Dropzone.Idle>
        </Text>
        
        <Text ta="center" fz="sm" c="dimmed" mt="xs">
          Supports TXT, PDF, and DOCX files
        </Text>
      </Dropzone>

      {files.length > 0 && (
        <Stack mt="md">
          <Text fw={500}>Uploaded files:</Text>
          {files.map((file, index) => (
            <Group key={index} justify="space-between">
              <Group gap="sm">
                <IconFileText size={16} />
                <Text size="sm">{file.name}</Text>
                <Text size="xs" c="dimmed">
                  ({(file.size / 1024).toFixed(1)} KB)
                </Text>
              </Group>
              <ActionIcon
                size="sm"
                variant="subtle"
                color="red"
                onClick={() => setFiles(files.filter((_, i) => i !== index))}
              >
                <IconTrash size={16} />
              </ActionIcon>
            </Group>
          ))}
        </Stack>
      )}
    </div>
  )
}

export default function Dropzones() {
  return (
    <Page title="Dropzones">
      <PageHeader
        title="Dropzones"
      />
      
      <Container size="xl" mt="xl">
        <Text size="sm" c="dimmed" mb="xl">
          Drag and drop file upload components with various styles and configurations.
        </Text>
        
        <Stack gap="xl">
          <DropzoneButton />
          <ImageDropzone />
          <MultipleFileDropzone />
          <SimpleDropzone />
        </Stack>
      </Container>
    </Page>
  )
}