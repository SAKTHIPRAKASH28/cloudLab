sudo apt install qemu-kvm libvirt-daemon-system libvirt-clients virt-manager bridge-utils virtinst

sudo systemctl enable --now libvirtd

sudo systemctl start libvirtd

sudo systemctl status libvirtd

sudo usermod -aG kvm $USER

sudo usermod -aG libvirt $USER

ip link show type bridge

ip link show mster virbr0

ip link add br0 type bridge

sudo ip a | more

sudo ip link set enps03 up

sudo ip link set enps03 master br0

ip address add dev IP

ip addr show br0

ip addr flush dev enps03

ip route add default via 10.184.43.1

