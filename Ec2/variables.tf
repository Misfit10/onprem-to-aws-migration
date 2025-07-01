variable "aws_instance_type" {
  default = "t2.micro"
  type = string
}

variable "default_aws_root_storage_size" {
  default = 10
  type = number
}

variable "ec2_ami_id" {
  default = "ami-00c8ac9147e19828e"
  type = string
}

variable "env" {
  default = "dev"
  type = string
}